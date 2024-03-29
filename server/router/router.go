package router

import (
	_ "net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// Routingを設定する関数．引数はecho.echo型で，返り値はerror型
func SetRouter(e *echo.Echo) error {

	// APIが叩かれた際にログを出力
	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "${time_rfc3339_nano} ${host} ${method} ${uri} ${status} ${header}\n",
		Output: os.Stdout,
	}))

	// 予想外のエラーが発生した際でも，サーバーを落とさないようにする
	e.Use(middleware.Recover())

	// CORSに対応
	e.Use(middleware.CORS())

	// APIを書く場所
	e.POST("/api/users", AddUserHandler)

	// 8000番のポートを開く
	err := e.Start(":8000")
	return err
}
