package middleware

import (
	"fmt"
	"golang-grud/config"
	"golang-grud/model"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func RequireAuth(c *gin.Context) {
	// Get the cookie off the request
	tokenString, err := c.Cookie("Authorization")

	if err != nil {
		c.HTML(http.StatusUnauthorized, "welcome.html", nil)
	}

	// Decode/validate it
	token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(os.Getenv("API_SECRET")), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		// Check the expiry date
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.HTML(http.StatusUnauthorized, "welcome.html", nil)
		}

		// Find the user with token Subject
		var user model.FullDetails
		db := config.DatabaseConnection()
		db.First(&user, claims["sub"])
		if user.Id == 0 {
			c.HTML(http.StatusUnauthorized, "welcome.html", nil)

		}

		//Continue
		c.Next()
	} else {
		c.HTML(http.StatusUnauthorized, "welcome.html", nil)

	}
}
