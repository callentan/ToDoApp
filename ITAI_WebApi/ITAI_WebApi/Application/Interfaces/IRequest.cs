namespace ITAI_WebApi.Application.Interfaces
{
    public interface IRequest<out TResponse> : IBaseRequest { }
    public interface IBaseRequest { }
}
