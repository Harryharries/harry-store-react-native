using Volo.Abp.Modularity;

namespace devset_front_end;

/* Inherit from this class for your domain layer tests. */
public abstract class devset_front_endDomainTestBase<TStartupModule> : devset_front_endTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
