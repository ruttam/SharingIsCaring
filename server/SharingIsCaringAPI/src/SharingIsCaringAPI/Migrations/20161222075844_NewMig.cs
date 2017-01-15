using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SharingIsCaringAPI.Migrations
{
    public partial class NewMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "time",
                table: "Trips",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "date",
                table: "Trips",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "time",
                table: "Trips",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "date",
                table: "Trips",
                nullable: false);
        }
    }
}
