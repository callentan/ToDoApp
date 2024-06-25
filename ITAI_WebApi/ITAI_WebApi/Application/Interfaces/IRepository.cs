namespace ITAI_WebApi.Application.Interfaces
{
    public interface IRepository<T>
    {
        IUnitOfWork UnitOfWork { get; }
    }
}
