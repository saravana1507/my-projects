package router

import (
	"golang-grud/controller"
	"golang-grud/jwt_tokens/middleware"

	"github.com/gin-gonic/gin"
)

func Newrouter(userController *controller.UserController) *gin.Engine {
	router := gin.Default()
	//find all html page
	router.LoadHTMLGlob("templates/*.html")
	//find all files
	router.Static("/templates", "./templates/")

	baseRouter := router.Group("/")
	//welcomepage
	baseRouter.GET("", userController.Welcome)
	//loginpage
	baseRouter.GET("/log", userController.LoginPage)
	baseRouter.POST("/loginpage", userController.CheckLoginPage)

	//register page
	baseRouter.GET("/register", userController.RegisterPage)
	baseRouter.POST("/savedetails", userController.Create)

	//middleware
	protected := router.Group("/api")
	protected.Use(middleware.RequireAuth)
	//welcome page
	protected.GET("/home", userController.HomePage)

	//fulldetail page
	protected.GET("/fulldetail", userController.FindAll)

	//findid page
	protected.GET("/findpage", userController.FindByIdPage)
	protected.GET("/finddetail/:userid", userController.FindById)

	//update page
	protected.GET("/updatepage", userController.UpdatePage)
	protected.PUT("/updatedetail", userController.Update)

	//delete page
	protected.GET("/deletepage", userController.DeletePage)
	protected.DELETE("/deletedetail/:userid", userController.Delete)
	return router
}
