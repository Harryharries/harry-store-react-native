using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace devset_front_end.Data;

/* This is used if database provider does't define
 * Idevset_front_endDbSchemaMigrator implementation.
 */
public class Nulldevset_front_endDbSchemaMigrator : Idevset_front_endDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
