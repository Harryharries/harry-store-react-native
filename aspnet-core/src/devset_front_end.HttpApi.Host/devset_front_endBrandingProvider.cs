using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace devset_front_end;

[Dependency(ReplaceServices = true)]
public class devset_front_endBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "devset_front_end";
}
