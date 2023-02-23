using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace AppReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            ServerStats serverStats = new ServerStats();

            return Enumerable.Range(1, 1).Select(index => new WeatherForecast
            {
                Date = serverStats.GetDiskUsage(),
                TemperatureC = serverStats.GetCpuUsageForProcess(),
                TemperatureF = serverStats.GetMemoryUsage(),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

    
    }
}
