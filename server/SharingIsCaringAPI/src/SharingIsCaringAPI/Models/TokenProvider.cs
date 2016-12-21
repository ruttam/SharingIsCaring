using System;
using Microsoft.IdentityModel.Tokens;

namespace SharingIsCaringAPI.Models
{
    public class TokenProvider
    {
        public string Path { get; set; } = "/token";

        public TimeSpan Expiration { get; set; } = TimeSpan.FromMinutes(5);

        public SigningCredentials SigningCredentials { get; set; }
    }
}
