Name: liman-website
Version: %VERSION%
Release: 0
License: MIT
Prefix: /liman/website
Summary: Liman Website Service
Group: Applications/System
BuildArch: x86_64
Depends: nodejs

%description
Liman Website Service

%pre

%prep

%build

%install
cp -rfa %{_app_dir} %{buildroot}

%post -p /bin/bash
chmod -R 770 /liman/website
chown -R root:root /liman/website

if [ -f "/usr/lib/systemd/system/liman-website.service" ]; then
    rm -rf /usr/lib/systemd/system/liman-website.service  2>/dev/null || true
    systemctl disable liman-website.service 2>/dev/null || true
    systemctl stop liman-website.service 2>/dev/null || true
    systemctl daemon-reload 2>/dev/null || true
fi

echo """
[Unit]
Description=Liman Website Service
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=liman
WorkingDirectory=/liman/website
ExecStart=/usr/bin/node server.js

[Install]
WantedBy=multi-user.target
""" > /usr/lib/systemd/system/liman-website.service

systemctl daemon-reload
systemctl enable liman-website.service
systemctl restart liman-website.service

%clean

%files
%defattr(0770, root, root)
/liman/website/*
/liman/website/.env.example

%define _unpackaged_files_terminate_build 0