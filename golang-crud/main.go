package main

import (
	"golang-grud/config"
	"golang-grud/controller"
	"golang-grud/helper"
	"golang-grud/model"
	"golang-grud/repository"
	"golang-grud/router"
	"golang-grud/service"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/rs/zerolog/log"
)

func main() {
	log.Info().Msg("started server!")
	config.LoadEnvVariables()
	//database
	db := config.DatabaseConnection()
	db.Table("full_details").AutoMigrate(&model.FullDetails{})

	//Repository
	userRepository := repository.NewUserReositoryImp(db)

	//Service
	validate := validator.New()
	userService := service.NewUserServiceImp(userRepository, validate)

	//controller
	userController := controller.NewUserController(userService)

	//router
	routes := router.Newrouter(userController)

	//http request
	server := &http.Server{
		Addr:    ":8080",
		Handler: routes,
	}
	err := server.ListenAndServe()

	helper.ErrorPanic(err)
}
