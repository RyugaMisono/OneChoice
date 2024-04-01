package model

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

// DB接続とテーブルを作成
func DBConnection() *sql.DB {
	dsn := GetDBConfig()
	var err error

	// dsnを用いてDBに接続し，戻り値をdb, errに代入
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(fmt.Errorf("DB Error: %w", err))
	}

	// テーブルを作成
	CreateTable(db)

	// *gorm.DB型を*sql.DB型に変換
	sqlDB, err := db.DB()
	if err != nil {
		panic(fmt.Errorf("DB Error: %w", err))
	}
	return sqlDB
}

// DBのdsnを取得
func GetDBConfig() string {
	user := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	hostname := os.Getenv("DB_HOSTNAME")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("DB_DBNAME")

	// dsn(DBの接続情報につける識別子)を定義
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, password, hostname, port, dbname) + "?charset=utf8mb4&parseTime=True&loc=Local"
	return dsn
}

// テーブルを作成
func CreateTable(db *gorm.DB) {
	// User型のテーブルを作成
	db.AutoMigrate(&User{})
}
