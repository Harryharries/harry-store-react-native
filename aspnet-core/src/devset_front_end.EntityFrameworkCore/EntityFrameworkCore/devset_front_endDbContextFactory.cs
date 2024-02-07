using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace devset_front_end.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class devset_front_endDbContextFactory : IDesignTimeDbContextFactory<devset_front_endDbContext>
{
    public devset_front_endDbContext CreateDbContext(string[] args)
    {
        devset_front_endEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<devset_front_endDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new devset_front_endDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../devset_front_end.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
