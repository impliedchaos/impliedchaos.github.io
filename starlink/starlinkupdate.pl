#!/usr/bin/perl

use strict;
use LWP::UserAgent;
use POSIX 'strftime';
use JSON;

my $ua = LWP::UserAgent->new();
$ua->timeout(90);

my $u = $ENV{SPACE_TRACK_ID};
my $p = $ENV{SPACE_TRACK_PW};
my $r = HTTP::Request->new(POST => "https://www.space-track.org/ajaxauth/login");
$r->header('Content-Type', 'application/x-www-form-urlencoded');
$r->content("identity=${u}&password=${p}");
my $resp = $ua->request($r);
if ($resp->is_error) {
   print STDERR $resp->content();
   exit(1);
}
my $cookie = (split(/;/,$resp->header('Set-Cookie')))[0];
if (!$cookie) {
   print STDERR "NO COOKIE!\n";
   print STDERR $resp->content();
   exit(1);
}
$r = HTTP::Request->new(GET => "https://www.space-track.org/basicspacedata/query/class/gp/object_name/~~STARLINK/decay_date/null-val/epoch/%3Enow-30/orderby/norad_cat_id/format/json");
$r->header('Cookie', $cookie);
$resp = $ua->request($r);
if ($resp->is_error) {
   print STDERR $resp->content();
   exit(1);
}
my $sats = decode_json($resp->content());
for (my $i=0; $i<@$sats; $i++) {
   delete($sats->[$i]->{CCSDS_OMM_VERS});
   delete($sats->[$i]->{COMMENT});
   delete($sats->[$i]->{CREATION_DATE});
   delete($sats->[$i]->{ORIGINATOR});
   delete($sats->[$i]->{TLE_LINE0});
}
open(my $fh, ">", "starlink.js") or die "can't open starlink.js for writing: $!";
my $today = strftime("%Y-%m-%d",gmtime());
print $fh "start=new Date('${today}T00:00:00.000Z').valueOf();\n";
print $fh "sats=".encode_json($sats).";\n";
close($fh);
exit(0);
