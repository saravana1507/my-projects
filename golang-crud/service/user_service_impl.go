package service

import (
	"fmt"
	"golang-grud/data/request"
	"golang-grud/data/response"
	"golang-grud/hassPassword"
	"golang-grud/helper"
	"golang-grud/jwt_tokens/token"
	"golang-grud/model"
	"golang-grud/repository"

	"github.com/go-playground/validator/v10"
)

type UserServiceImpl struct {
	UserRepository repository.UserRepository
	validate       *validator.Validate
}

func NewUserServiceImp(userRepository repository.UserRepository, validate *validator.Validate) UserService {
	return &UserServiceImpl{
		UserRepository: userRepository,
		validate:       validate,
	}
}

//Login Implement userService
func (u *UserServiceImpl) Login(users request.LoginUserRequest) (string, string) {
	userData, err := u.UserRepository.Login(users)
	if userData.Firstname == "" {
		return "", "Username not found"
	}
	checkPassword := hassPassword.CheckPasswordHash(users.Password, userData.Password)
	if checkPassword {
		token, _ := token.TokenGenerate(userData.Id)
		fmt.Println("token is:", token)
		if err != nil {
			return "", ""
		}
		return token, ""
	} else {
		return "", "Password mismatch"
	}
}

//create implements UserService
func (u *UserServiceImpl) Create(user request.CreateUserRequest) bool {
	err := u.validate.Struct(user)
	helper.Create_error(err)
	hasspassword, _ := hassPassword.HashPassword(user.Password)
	userModal := model.FullDetails{
		Firstname:   user.Firstname,
		Lastname:    user.Lastname,
		Email:       user.Email,
		Phonenumber: user.Phonenumber,
		Password:    hasspassword,
	}

	u.UserRepository.Save(userModal)
	return true
}

//FindAll implements UserService
func (u *UserServiceImpl) FindAll() ([]response.UserResponce, string) {
	results, err := u.UserRepository.FindAll()
	var users []response.UserResponce
	for _, value := range results {
		user := response.UserResponce{
			Id:          value.Id,
			Firstname:   value.Firstname,
			Lastname:    value.Lastname,
			Email:       value.Email,
			Phonenumber: value.Phonenumber,
			Password:    value.Password,
		}
		users = append(users, user)
	}
	return users, err
}

//findById implementation userService
func (u *UserServiceImpl) FindById(userId int) (userresponce response.UserResponce, er string) {
	UserData, _ := u.UserRepository.FindById(userId)
	if UserData.Id == 0 {
		return response.UserResponce{}, "Cannot found user id"
	}
	userresponce = response.UserResponce{
		Id:          UserData.Id,
		Firstname:   UserData.Firstname,
		Lastname:    UserData.Lastname,
		Email:       UserData.Email,
		Phonenumber: UserData.Phonenumber,
		Password:    UserData.Password,
	}

	return userresponce, ""
}

//Update implementation userService
func (u *UserServiceImpl) Update(user request.UpdateUserRequest) string {
	userData, _ := u.UserRepository.FindById(user.Id)
	if userData.Id == 0 {
		return "user Id cannot find"
	}
	userData.Firstname = user.Firstname
	userData.Lastname = user.Lastname
	userData.Email = user.Email
	userData.Phonenumber = user.Phonenumber
	u.UserRepository.Update(userData)
	return ""
}

//delete implements UserService
func (u *UserServiceImpl) Delete(userId int) {
	u.UserRepository.Delete(userId)

}
