cat >docker-manifest.yml <<EOF
image: 'signalk/signalk-server:$TAG_SPEC'
manifests:
  -
    image: 'signalk/signalk-server:linux-amd64-$TAG_SPEC'
    platform:
      architecture: amd64
      os: linux
  -
    image: 'signalk/signalk-server:linux-arm32v7-$TAG_SPEC'
    platform:
      architecture: arm
      variant: v7
      os: linux