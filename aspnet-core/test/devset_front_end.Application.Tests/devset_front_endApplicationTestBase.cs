using Volo.Abp.Modularity;

namespace devset_front_end;

public abstract class devset_front_endApplicationTestBase<TStartupModule> : devset_front_endTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
