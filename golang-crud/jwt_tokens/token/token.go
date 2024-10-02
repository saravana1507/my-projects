package token

import (
	"os"
	"time"

	jwt "github.com/golang-jwt/jwt/v5"
)

// GENERATE tokens fuctions
func TokenGenerate(userID int) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": userID,
		"exp": time.Now().Add(time.Minute * 1).Unix(),
	})
	return token.SignedString([]byte(os.Getenv("API_SECRET")))
}
