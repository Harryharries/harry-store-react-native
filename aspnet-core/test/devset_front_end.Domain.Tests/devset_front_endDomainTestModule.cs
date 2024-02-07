using Volo.Abp.Modularity;

namespace devset_front_end;

[DependsOn(
    typeof(devset_front_endDomainModule),
    typeof(devset_front_endTestBaseModule)
)]
public class devset_front_endDomainTestModule : AbpModule
{

}
