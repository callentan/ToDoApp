using Microsoft.AspNetCore.Hosting.Server;

namespace ITAI_WebApi.Application.Interfaces
{
    /// <summary>
    /// Defines a mediator to encapsulate request/response and publishing interaction patterns
    /// </summary>
    public interface IMediator : ISender, IPublisher
    {
    }
}
