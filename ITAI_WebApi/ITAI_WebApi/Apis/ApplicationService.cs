using ITAI_WebApi.Application.Interfaces;

namespace ITAI_WebApi.Apis
{
    public class ApplicationService(IMediator mediator)
    {

        public IMediator Mediator { get; set; } = mediator;
    }
}
