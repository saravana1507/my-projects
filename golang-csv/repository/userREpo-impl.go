package repository

import (
	"fmt"
	"golang-csv/modal"

	"gorm.io/gorm"
)

type UserRepository struct {
	Db *gorm.DB
}

func NewUserRepoImp(db *gorm.DB) UserRepo {
	return &UserRepository{Db: db}
}

func (c *UserRepository) GetAll(value modal.Responder) interface{} {
	var users interface{}

	switch value.(type) {
	case modal.FullDetails:
		var user []modal.FullDetails
		result := c.Db.Find(&user)
		fmt.Println(result.Error)
		c.Db.Delete(&modal.FullDetails{})
		users = user

	case modal.EmployeeDetails:
		var user []modal.EmployeeDetails
		result := c.Db.Find(&user)
		fmt.Println(result.Error)
		c.Db.Delete(&modal.EmployeeDetails{})
		users = user

	case modal.ManagerDetails:
		var user []modal.ManagerDetails
		result := c.Db.Find(&user)
		fmt.Println(result.Error)
		c.Db.Delete(&modal.ManagerDetails{})
		users = user

	}
	return users
}

func (c *UserRepository) SetAll(value modal.Responder) {
	result := c.Db.Create(&value)
	fmt.Println(result)

}
