using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // services
            services.AddScoped<ITokenService, TokenService>();

            // connecting DbContext
            services.AddDbContext<DataContext>(options =>
             {
                 options.UseSqlite(config.GetConnectionString("DefaultConnection"));
             });

            return services;
        }
    }
}