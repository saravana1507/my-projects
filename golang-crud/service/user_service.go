package service

import (
	"golang-grud/data/request"
	"golang-grud/data/response"
)

type UserService interface {
	Create(user request.CreateUserRequest) bool
	Login(user request.LoginUserRequest) (string, string)
	Update(user request.UpdateUserRequest) string
	Delete(userId int)
	FindById(userId int) (response.UserResponce, string)
	FindAll() ([]response.UserResponce, string)
}
