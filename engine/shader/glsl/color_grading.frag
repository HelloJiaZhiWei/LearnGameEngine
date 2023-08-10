#version 310 es

#extension GL_GOOGLE_include_directive : enable

#include "constants.h"

layout(input_attachment_index = 0, set = 0, binding = 0) uniform highp subpassInput in_color;

layout(set = 0, binding = 1) uniform sampler2D color_grading_lut_texture_sampler;

layout(location = 0) out highp vec4 out_color;

void main()
{
    highp ivec2 lut_tex_size = textureSize(color_grading_lut_texture_sampler, 0);
    highp float _COLORS      = float(lut_tex_size.y);

    highp vec4 color       = subpassLoad(in_color).rgba;
    //highp float left_block_id = floor(color.b * _COLORS);
    //highp float right_block_id = ceil(color.b * _COLORS);
    //highp vec2 uv;
    //uv.x = (left_block_id + color.r) / float(lut_tex_size.x); 
    //uv.y = color.g;
    //highp vec4 color_left = texture(color_grading_lut_texture_sampler,uv);
    
    //uv.x = (right_block_id + color.r) / float(lut_tex_size.x); 
    //highp vec4 color_right = texture(color_grading_lut_texture_sampler,uv);
    
    //color = mix(color_left,color_right,fract(_COLORS * color.b));

    out_color = color;
}
