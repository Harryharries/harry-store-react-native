using Volo.Abp.Modularity;

namespace devset_front_end;

[DependsOn(
    typeof(devset_front_endApplicationModule),
    typeof(devset_front_endDomainTestModule)
)]
public class devset_front_endApplicationTestModule : AbpModule
{

}
