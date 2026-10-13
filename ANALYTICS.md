# Traffic for your GitHub Pages tools

## Repository traffic is different from website traffic

GitHub's repository → Insights → Traffic reports visits to the repository,
clones, referrers, and popular repository content over the past 14 days.
Those statistics describe the repository; they are not an analytics dashboard
for people visiting your tools at `soloh4cker.github.io`.

Official reference:
https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository

## Recommended free option: Cloudflare Web Analytics

You can keep GitHub Pages. You do NOT need to move hosting, buy a domain,
change DNS, or use Cloudflare as a proxy to add Cloudflare Web Analytics.
It supplies page views and visits, with filters including page path,
country, referrer, and device type.

### Setup

1. Create a free Cloudflare account at https://dash.cloudflare.com/.
2. Open Web Analytics and choose Add a site.
3. Enter your website hostname: `soloh4cker.github.io`.
   Enter the hostname, not a full URL or a particular repository path.
4. Select the hostname and finish the setup.
5. In Manage site, copy Cloudflare's JavaScript snippet.
6. Open this homepage's `index.html` and paste the FULL snippet where the
   OPTIONAL ANALYTICS comment appears, just before `</body>`.
7. Paste the SAME snippet just before `</body>` in the finished HTML of
   Pegboard Studio, Shelf Studio, and Model Studio on that same hostname.
8. Commit/upload the changed HTML files and let GitHub Pages redeploy.
9. Visit the actual hosted pages. After a few minutes, open Web Analytics
   in Cloudflare to see the first data. Use the Path filter to compare tools.

If a tool is hosted under a different hostname, add that hostname as another
site in Cloudflare and use its corresponding snippet.

Adding analytics only to the homepage tracks only the homepage's visits;
it will not automatically track the other studios.

### What you can see

- Page views: how often pages are viewed.
- Visits: arrivals from a different website or a direct link; one visit can
  include multiple page views. These are NOT a count of distinct people.
- Path: see which studio pages receive traffic.
- Referrer: see which external sites send visits.
- Country and device type: see the broad audience breakdown.

This does not automatically count STL/3MF exports, distinguish every unique
person, or measure every action inside a studio. Tracking starts after you
install it; past visits cannot be recovered. Browser blocking can affect
recorded totals. Keep analytics out of your downloaded offline copies if
those copies should remain entirely offline.

Official setup:
https://developers.cloudflare.com/web-analytics/get-started/

Free service and no DNS/proxy requirement:
https://developers.cloudflare.com/web-analytics/about/

Metrics:
https://developers.cloudflare.com/web-analytics/data-metrics/high-level-metrics/

Filters:
https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/

## Another free option

Google Analytics 4 is an alternative if you later need detailed event tracking,
such as which studio button is clicked or how many models are exported.
It requires a separate account/property and event setup. Cloudflare is the
simpler starting point for your current visitor and page-traffic questions.
