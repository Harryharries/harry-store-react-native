using devset_front_end.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace devset_front_end.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class devset_front_endController : AbpControllerBase
{
    protected devset_front_endController()
    {
        LocalizationResource = typeof(devset_front_endResource);
    }
}
