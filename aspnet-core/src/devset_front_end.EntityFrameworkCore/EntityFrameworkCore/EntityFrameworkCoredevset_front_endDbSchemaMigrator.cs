using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using devset_front_end.Data;
using Volo.Abp.DependencyInjection;

namespace devset_front_end.EntityFrameworkCore;

public class EntityFrameworkCoredevset_front_endDbSchemaMigrator
    : Idevset_front_endDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoredevset_front_endDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the devset_front_endDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<devset_front_endDbContext>()
            .Database
            .MigrateAsync();
    }
}
