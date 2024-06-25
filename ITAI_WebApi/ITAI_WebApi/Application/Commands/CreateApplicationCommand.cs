using ITAI_WebApi.Application.Interfaces;
using ITAI_WebApi.Application.Models;
using System.Runtime.Serialization;

namespace ITAI_WebApi.Application.Commands
{
    [DataContract]
    public class CreateApplicationCommand : IRequest<bool>
    {
        [DataMember]
        private readonly List<ApplicationDTO> _applicationItems;

        [DataMember]
        public IEnumerable<ApplicationDTO> ApplicationItems => _applicationItems;

        public CreateApplicationCommand()
        {
            _applicationItems = new List<ApplicationDTO>();
        }

        public CreateApplicationCommand(List<ApplicationDTO> applications)
        {
            _applicationItems = applications.ToList();
        }
    }
}
