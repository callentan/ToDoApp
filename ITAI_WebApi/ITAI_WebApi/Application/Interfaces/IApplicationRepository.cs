using ITAI_WebApi.Application.Models;

namespace ITAI_WebApi.Application.Interfaces
{
    public interface IApplicationRepository : IRepository<ApplicationDTO>
    {
        ApplicationDTO Add(ApplicationDTO application);
        void Update(ApplicationDTO application);
        Task<ApplicationDTO> GetAsync(int id);
    }
}
