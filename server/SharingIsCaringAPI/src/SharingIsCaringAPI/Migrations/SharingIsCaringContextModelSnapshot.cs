using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SharingIsCaringAPI.Models;

namespace SharingIsCaringAPI.Migrations
{
    [DbContext(typeof(SharingIsCaringContext))]
    partial class SharingIsCaringContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1");

            modelBuilder.Entity("SharingIsCaringAPI.Models.Profile", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("about");

                    b.Property<DateTime>("dateOfBirth");

                    b.Property<DateTime>("lastLoginDate");

                    b.Property<DateTime>("lastLoginTime");

                    b.Property<string>("name");

                    b.Property<string>("profession");

                    b.Property<string>("surname");

                    b.Property<string>("telephoneNumber");

                    b.Property<int>("user_id");

                    b.HasKey("id");

                    b.ToTable("Profiles");
                });

            modelBuilder.Entity("SharingIsCaringAPI.Models.Trip", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("car");

                    b.Property<DateTime>("date");

                    b.Property<string>("from");

                    b.Property<int>("numberOfSeats");

                    b.Property<string>("passengers");

                    b.Property<DateTime>("time");

                    b.Property<string>("to");

                    b.HasKey("id");

                    b.ToTable("Trips");
                });

            modelBuilder.Entity("SharingIsCaringAPI.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("email");

                    b.Property<string>("password");

                    b.HasKey("id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SharingIsCaringAPI.Models.UserImage", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("image");

                    b.Property<int>("user_id");

                    b.HasKey("id");

                    b.ToTable("UserImages");
                });
        }
    }
}
