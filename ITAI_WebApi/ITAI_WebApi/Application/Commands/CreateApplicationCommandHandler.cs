using ITAI_WebApi.Application.Interfaces;

namespace ITAI_WebApi.Application.Commands
{
    public class CreateApplicationCommandHandler : IRequestHandler<CreateApplicationCommand, bool>
    {
        private readonly IApplicationRepository _repository;
        public CreateApplicationCommandHandler(IApplicationRepository repository)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }
        public async Task<bool> Handle(CreateApplicationCommand message, CancellationToken cancellationToken)
        {
            foreach (var item in message.ApplicationItems)
            {
                _repository.Add(item);
            }

            return await _repository.UnitOfWork.SaveEntitiesAsync(cancellationToken);
        }
    }
}
