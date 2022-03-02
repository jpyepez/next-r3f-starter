#define PI 3.1415926536
#define TAU 2.*PI

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uVelocity;
varying vec2 vUv;

vec2 correctAspectRatio(vec2 uv) {
    uv -= 0.5;
    uv.x *= uResolution.x/uResolution.y;
    uv += 0.5;
    return uv;
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle), sin(_angle),cos(_angle));
}

void main() {
    vec2 st = vUv;

    st = correctAspectRatio(st);

    float t = .25*uTime;

    float d = pow(1.-length(st-.5), 3.);
    float g = d*.5*(1.+sin(2.*TAU*t));
	vec3 color = vec3(d, g, .2*d);

    gl_FragColor = vec4(color, 1);
}