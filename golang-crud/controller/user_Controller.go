package controller

import (
	"golang-grud/data/request"
	"golang-grud/helper"
	"golang-grud/service"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type UserController struct {
	userService service.UserService
}

//Controller
func NewUserController(service service.UserService) *UserController {
	return &UserController{
		userService: service,
	}
}

//welcome page
func (controller *UserController) Welcome(ctx *gin.Context) {
	ctx.SetCookie("Authorization", "", -1, "", "", false, true)
	ctx.HTML(http.StatusOK, "welcome.html", nil)
	ctx.String(http.StatusOK, "Cookie has been deleted")
}

//loginPage Controller
func (controller *UserController) LoginPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "index.html", nil)
}

//checklogin controller
func (controller *UserController) CheckLoginPage(ctx *gin.Context) {
	LoginUserRequest := request.LoginUserRequest{}
	err := ctx.Bind(&LoginUserRequest)
	helper.Login_error(err)

	token, errormsg := controller.userService.Login(LoginUserRequest)
	if errormsg == "" {
		ctx.SetSameSite(http.SameSiteLaxMode)
		ctx.SetCookie("Authorization", token, 60*1, "", "", false, true)
		ctx.JSON(http.StatusOK, gin.H{"Message": "login successfully"})
	} else {
		ctx.JSON(http.StatusForbidden, gin.H{"Value": errormsg})
	}

}

//register page
func (controller *UserController) RegisterPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "register.html", nil)
}

// Create Controller
func (controller *UserController) Create(ctx *gin.Context) {
	createUserRequest := request.CreateUserRequest{}
	err := ctx.Bind(&createUserRequest)
	helper.Create_error(err)
	userResponce := controller.userService.Create(createUserRequest)
	ctx.Header("Content-Type", "application/json")

	if userResponce {
		ctx.JSON(http.StatusOK, "register successfull")
	} else {
		ctx.JSON(http.StatusUnauthorized, "register unsucessfull")

	}
}

//welcome page
func (controller *UserController) HomePage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "home.html", nil)
}

// FindAll Controller
func (controller *UserController) FindAll(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "fulluser.html", nil)
	userResponce, err := controller.userService.FindAll()

	ctx.Header("Content-Type", "application/json")
	if err != "" {
		ctx.JSON(http.StatusOK, gin.H{
			"Error": err,
		})
	} else {
		ctx.JSON(http.StatusOK, gin.H{
			"user": userResponce,
		})
	}

}

//findbyidpage controller
func (controller *UserController) FindByIdPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "userid.html", nil)
}

// FindById Controller
func (controller *UserController) FindById(ctx *gin.Context) {

	uid := ctx.Param("userid")
	id, _ := strconv.Atoi(uid)
	userResponse, er := controller.userService.FindById(id)

	ctx.Header("Content-Type", "application/json")
	if er != "" {
		ctx.JSON(http.StatusForbidden, gin.H{"Error": er})
	} else {
		ctx.JSON(http.StatusOK, gin.H{"user": userResponse})
	}

}

//updatepage controller
func (controller *UserController) UpdatePage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "updateuser.html", nil)

}

// Update Controller
func (controller *UserController) Update(ctx *gin.Context) {
	updateUserRequest := request.UpdateUserRequest{}
	err := ctx.Bind(&updateUserRequest)
	helper.Update_error(err)
	ctx.Header("Content-Type", "application/json")

	msg := controller.userService.Update(updateUserRequest)
	if msg != "" {
		ctx.JSON(http.StatusForbidden, gin.H{
			"Error": msg,
		})
	} else {
		ctx.JSON(http.StatusOK, gin.H{
			"Message": "Update successfully",
		})
	}

}

//Deletepage controller
func (controller *UserController) DeletePage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "deleteuser.html", nil)
}

// Delete Controller
func (controller *UserController) Delete(ctx *gin.Context) {
	uid := ctx.Param("userid")
	id, _ := strconv.Atoi(uid)

	controller.userService.Delete(id)
	ctx.Header("Content-Type", "application/json")
	ctx.JSON(http.StatusOK, gin.H{"Message": "delete successfully"})

}
