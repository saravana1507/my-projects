package repository

import (
	"errors"
	"golang-grud/data/request"
	"golang-grud/helper"
	"golang-grud/model"

	"gorm.io/gorm"
)

type UserRepositoryImp struct {
	Db *gorm.DB
}

func NewUserReositoryImp(Db *gorm.DB) UserRepository {
	return &UserRepositoryImp{Db: Db}
}

//Login implementation UserRepository
func (u *UserRepositoryImp) Login(user request.LoginUserRequest) (users model.FullDetails, err error) {
	var dbuser model.FullDetails
	resultname := u.Db.Where("firstname = ?", user.Firstname).First(&dbuser)
	if resultname == nil {
		return dbuser, errors.New("userdetail not saved")
	} else {
		return dbuser, nil
	}

}

//save implementation UserRepository
func (u *UserRepositoryImp) Save(user model.FullDetails) {
	result := u.Db.Create(&user)
	helper.Create_error(result.Error)
}

//FindAll implementation UserRepository
func (u *UserRepositoryImp) FindAll() ([]model.FullDetails, string) {
	var user []model.FullDetails
	result := u.Db.Find(&user)
	err := helper.Findall(result.Error)
	return user, err
}

//FindById implementation UserRepository
func (u *UserRepositoryImp) FindById(userId int) (users model.FullDetails, err error) {
	var user model.FullDetails
	result := u.Db.Find(&user, userId)
	if result != nil {
		return user, nil
	} else {
		return user, errors.New("user is not found")
	}
}

//Update implementation UserRepository
func (u *UserRepositoryImp) Update(user model.FullDetails) {
	var updateUser = request.UpdateUserRequest{
		Id:          user.Id,
		Firstname:   user.Firstname,
		Lastname:    user.Lastname,
		Email:       user.Email,
		Phonenumber: user.Phonenumber,
	}

	u.Db.Model(&user).Updates(updateUser)
}

//delete the function
func (u *UserRepositoryImp) Delete(userId int) {
	var user model.FullDetails
	result := u.Db.Where("id=?", userId).Delete(user)
	helper.Delete_error(result.Error)
}
