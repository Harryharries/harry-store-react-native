using devset_front_end.Samples;
using Xunit;

namespace devset_front_end.EntityFrameworkCore.Applications;

[Collection(devset_front_endTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<devset_front_endEntityFrameworkCoreTestModule>
{

}
