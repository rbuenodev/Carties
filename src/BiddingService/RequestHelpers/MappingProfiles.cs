using AutoMapper;
using BiddingService.DTOs;
using BiddingService.Models;
using Contracts.Models;

namespace BiddingService.RequestHelpers;

public class MappingProfiles : Profile
{

    public MappingProfiles()
    {
        CreateMap<Bid, BidDto>();
        CreateMap<Bid, BidPlaced>();
    }
}
