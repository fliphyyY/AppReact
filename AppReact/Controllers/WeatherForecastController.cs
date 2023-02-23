using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace AppReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ServerStatsModel> Get()
        {
            ServerStats serverStats = new ServerStats();

            return Enumerable.Range(1, 1).Select(index => new ServerStatsModel
            {
                DiskUsage = serverStats.GetDiskUsage(),
                CpuUsage = serverStats.GetCpuUsageForProcess(),
                MemoryUsage = serverStats.GetMemoryUsage(),
            })
            .ToArray();
        }

    
    }
}
