using ITAI_WebApi.Application.Commands;
using ITAI_WebApi.Application.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ITAI_WebApi.Apis
{
    public static class ApplicationApi
    {
        public static RouteGroupBuilder MapApplicationApi(this IEndpointRouteBuilder app)
        {
            var api = app.MapGroup("api/applications");
            api.MapPost("/", CreateApplicationAsync);
            return api;
        }

        public static async Task<Results<Ok, BadRequest<string>>> CreateApplicationAsync(
            [FromHeader(Name = "x-requestid")] Guid requestId,
            CreateApplicationRequest request,
            [AsParameters] ApplicationService services)
        {
            var createApplicationCommand = new CreateApplicationCommand(request.items);

            var requestCreateOrder = new IdentifiedCommand<CreateApplicationCommand, bool>(createApplicationCommand, requestId);

            var result = await services.Mediator.Send(requestCreateOrder);

            return TypedResults.Ok();
        }
    }

    public record CreateApplicationRequest(
        List<ApplicationDTO> items);
}
