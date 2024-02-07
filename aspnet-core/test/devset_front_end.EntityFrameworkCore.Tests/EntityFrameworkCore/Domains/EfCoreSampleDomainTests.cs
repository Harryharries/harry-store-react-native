using devset_front_end.Samples;
using Xunit;

namespace devset_front_end.EntityFrameworkCore.Domains;

[Collection(devset_front_endTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<devset_front_endEntityFrameworkCoreTestModule>
{

}
