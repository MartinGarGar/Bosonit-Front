export interface Wheather {
    lat:             number;
    lon:             number;
    alt_m:           number;
    alt_ft:          number;
    wx_desc:         string;
    wx_code:         number;
    wx_icon:         string;
    temp_c:          number;
    temp_f:          number;
    feelslike_c:     number;
    feelslike_f:     number;
    humid_pct:       number;
    windspd_mph:     number;
    windspd_kmh:     number;
    windspd_kts:     number;
    windspd_ms:      number;
    winddir_deg:     number;
    winddir_compass: string;
    cloudtotal_pct:  number;
    vis_km:          number;
    vis_mi:          number;
    vis_desc:        null;
    slp_mb:          number;
    slp_in:          number;
    dewpoint_c:      number;
    dewpoint_f:      number;
}
