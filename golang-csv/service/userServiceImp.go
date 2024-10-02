package service

import (
	"encoding/json"
	"fmt"
	"golang-csv/help"
	"golang-csv/modal"
	"golang-csv/repository"
	"io/ioutil"
	"os"
)

type UserserviceImp struct {
	User repository.UserRepo
}

func NewUserserviceImp(u repository.UserRepo) Userservice {
	return &UserserviceImp{User: u}
}

func (u *UserserviceImp) Getvalue(key string, value modal.Responder) {
	users := u.User.GetAll(value)
	userdata, _ := json.Marshal(users)
	filename := fmt.Sprintf("jsonfile/%s.json", key)
	err := ioutil.WriteFile(filename, userdata, 0644)
	help.WriteJsonError(err)
}

func (s *UserserviceImp) Setvalue(key string, value modal.Responder) {
	var users interface{}
	filename := fmt.Sprintf("jsonfile/%s.json", key)
	userdetails, err := os.ReadFile(filename)
	help.OpenJsonError(err)
	file := []byte(userdetails)

	switch value.(type) {
	case modal.FullDetails:
		var data []modal.FullDetails
		err = json.Unmarshal(file, &data)
		help.OpenJsonError(err)
		err = os.Remove(filename)
		help.OpenJsonError(err)
		users = data
	case modal.EmployeeDetails:
		var data []modal.EmployeeDetails
		err = json.Unmarshal(file, &data)
		help.OpenJsonError(err)
		err = os.Remove(filename)
		help.OpenJsonError(err)
		users = data
	case modal.ManagerDetails:
		var data []modal.ManagerDetails
		err = json.Unmarshal(file, &data)
		help.OpenJsonError(err)
		err = os.Remove(filename)
		help.OpenJsonError(err)
		users = data
	}

	s.User.SetAll(users)
}
