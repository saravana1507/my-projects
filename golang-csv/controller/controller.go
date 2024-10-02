package controller

import (
	"golang-csv/modal"
	"golang-csv/service"
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
)

var Data = make(map[string]modal.Responder)

type UserController struct {
	Userservice service.Userservice
}

func NewController(c service.Userservice) UserController {
	return UserController{Userservice: c}
}

func (control *UserController) FindAll(ctx *gin.Context) {
	var wg sync.WaitGroup
	Data["fullDetails"] = modal.FullDetails{}
	Data["employeeDetails"] = modal.EmployeeDetails{}
	Data["managerDetails"] = modal.ManagerDetails{}
	for key, value := range Data {
		wg.Add(1)
		go func(key string, value modal.Responder) {
			defer wg.Done()
			control.Userservice.Getvalue(key, value)
		}(key, value)
	}
	wg.Wait()
	ctx.JSON(http.StatusOK, "file retrive successfully")
}

func (control *UserController) Save(ctx *gin.Context) {
	var wg sync.WaitGroup
	Data["fullDetails"] = modal.FullDetails{}
	Data["employeeDetails"] = modal.EmployeeDetails{}
	Data["managerDetails"] = modal.ManagerDetails{}
	for key, value := range Data {
		wg.Add(1)
		go func(key string, value modal.Responder) {
			defer wg.Done()
			control.Userservice.Setvalue(key, value)
		}(key, value)
	}
	wg.Wait()
	ctx.JSON(http.StatusOK, "file uploaded successfully")

}
