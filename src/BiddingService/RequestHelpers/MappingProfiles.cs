using AutoMapper;
using Contracts.Models;

namespace BiddingService;

public class MappingProfiles : Profile
{

    public MappingProfiles()
    {
        CreateMap<Bid, BidDto>();
        CreateMap<Bid, BidPlaced>();
    }
}
