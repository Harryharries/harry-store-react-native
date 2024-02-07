using devset_front_end.Localization;
using Volo.Abp.Application.Services;

namespace devset_front_end;

/* Inherit your application services from this class.
 */
public abstract class devset_front_endAppService : ApplicationService
{
    protected devset_front_endAppService()
    {
        LocalizationResource = typeof(devset_front_endResource);
    }
}
