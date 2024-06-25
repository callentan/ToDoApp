namespace ITAI_WebApi.Application.Interfaces
{
    public interface IPublisher
    {
        Task Publish(object notification, CancellationToken cal = default);
    }
}
