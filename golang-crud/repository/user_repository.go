package repository

import (
	"golang-grud/data/request"
	"golang-grud/model"
)

type UserRepository interface {
	Save(user model.FullDetails)
	Update(user model.FullDetails)
	Delete(userId int)
	FindById(userId int) (user model.FullDetails, err error)
	FindAll() ([]model.FullDetails, string)
	Login(user request.LoginUserRequest) (users model.FullDetails, err error)
}
