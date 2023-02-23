using System.Diagnostics;

namespace AppReact
{
    public class ServerStats

    {


        public double GetCpuUsageForProcess()
        {
            var cpuCounter = new PerformanceCounter("Processor", "% Processor Time", "_Total", true);
            var value = cpuCounter.NextValue();
            // In most cases you need to call .NextValue() twice
            if (Math.Abs(value) <= 0.00)
            {
                value = cpuCounter.NextValue();
            }

            return value;
        }

        public long GetMemoryUsage()
        {
            Process currentProc = Process.GetCurrentProcess();
            long memoryUsed = currentProc.PrivateMemorySize64 / 1048576;
            return memoryUsed;

        }

        public float GetDiskUsage()
        {
            PerformanceCounter disk = new PerformanceCounter("PhysicalDisk", "% Disk Time", "_Total");
            float j = 0;
            j =disk.NextValue();
            return j;
        }


    }
}
