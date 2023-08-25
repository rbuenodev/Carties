using AutoMapper;
using Contracts.Models;
using SearchService.Models;

namespace SearchService;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<AuctionCreated, Item>();
    }
}
