using devset_front_end.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace devset_front_end.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(devset_front_endEntityFrameworkCoreModule),
    typeof(devset_front_endApplicationContractsModule)
)]
public class devset_front_endDbMigratorModule : AbpModule
{
}
