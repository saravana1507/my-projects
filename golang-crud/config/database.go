package config

import (
	"fmt"
	"golang-grud/helper"
	"golang-grud/model"
	"log"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "Saravana1507@"
	dbName   = "user_details"
)

var DB *gorm.DB

func LoadEnvVariables() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func DatabaseConnection() *gorm.DB {
	sqlnfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbName)
	DB, err := gorm.Open(postgres.Open(sqlnfo), &gorm.Config{})
	fmt.Println(helper.Dberror(err))
	return DB
}

func Sync() {
	DB.AutoMigrate(&model.FullDetails{})
}
