function drawPicture() {
    g_shapesList = []; // Clear existing shapes

    const verts = new Float32Array(6);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    const colors = {
        background: [0.294, 0.675, 0.929, 1.0],
        shade1: [0.529, 0.533, 0.278, 1.0],
        shade2: [0.392, 0.4, 0.298, 1.0],
        shade3: [0.38, 0.396, 0.259, 1.0],
        shade4: [0.443, 0.439, 0.349, 1.0],
        shade5: [0.435, 0.431, 0.341, 1.0],
        shade6: [0.4, 0.404, 0.31, 1.0],
        shade7: [0.514, 0.514, 0.463, 1.0],
        shade8: [0.71, 0.706, 0.655, 1.0],
        shade9: [0.78, 0.741, 0.702, 1.0],
        shade10: [0.804, 0.765, 0.725, 1.0],
        shade11: [0.388, 0.392, 0.302, 1.0],
        shade12: [0.251, 0.267, 0.161, 1.0],
        shade13: [0.424, 0.416, 0.345, 1.0],
        shade14: [0.569, 0.525, 0.49, 1.0],
        shade15: [0.686, 0.647, 0.608, 1.0],
        shade16: [0.537, 0.58, 0.322, 1.0],
        shade17: [0.529, 0.561, 0.322, 1.0],
        shade18: [0.224, 0.231, 0.114, 1.0],
        shade19: [0.227, 0.243, 0.145, 1.0],
        shade20: [0.31, 0.318, 0.157, 1.0],
        shade21: [0.314, 0.349, 0.235, 1.0],
        shade22: [0.408, 0.42, 0.22, 1.0],
        shade23: [0.306, 0.314, 0.208, 1.0],
        shade24: [0.31, 0.345, 0.235, 1.0],
        shade25: [0.361, 0.365, 0.239, 1.0],
        shade26: [0.267, 0.282, 0.196, 1.0],
        shade27: [0.345, 0.345, 0.184, 1.0],
        shade28: [0.412, 0.427, 0.278, 1.0],
        shade29: [0.373, 0.38, 0.212, 1.0],
        shade30: [0.224, 0.247, 0.153, 1.0],
        shade31: [0.565, 0.612, 0.388, 1.0],
        shade32: [0.2, 0.22, 0.169, 1.0],
        shade33: [0.231, 0.278, 0.22, 1.0],
        shade34: [0.137, 0.153, 0.098, 1.0],
        shade35: [0.302, 0.341, 0.153, 1.0],
        shade36: [0.176, 0.196, 0.125, 1.0],
        shade37: [0.494, 0.522, 0.361, 1.0],
        shade38: [0.255, 0.267, 0.192, 1.0],
        shade39: [0.431, 0.459, 0.271, 1.0],
        shade40: [0.773, 0.741, 0.702, 1.0],
        shade41: [0.753, 0.71, 0.671, 1.0],
        shade42: [0.737, 0.694, 0.655, 1.0],
        shade43: [0.651, 0.651, 0.6, 1.0],
        shade44: [0.612, 0.62, 0.573, 1.0],
        shade45: [0.451, 0.455, 0.443, 1.0],
        shade46: [0.494, 0.498, 0.478, 1.0],
        shade47: [0.416, 0.412, 0.424, 1.0],
        shade48: [0.592, 0.592, 0.584, 1.0],
        shade49: [0.698, 0.702, 0.659, 1.0],
        shade50: [0.659, 0.659, 0.651, 1.0],
        shade51: [0.565, 0.565, 0.565, 1.0],
        shade52: [0.671, 0.671, 0.671, 1.0],
        shade53: [0.769, 0.773, 0.737, 1.0],
        shade54: [0.753, 0.71, 0.671, 1.0],
        shade55: [0.62, 0.588, 0.545, 1.0],
        shade56: [0.773, 0.733, 0.694, 1.0],
        shade57: [0.694, 0.643, 0.608, 1.0],
        shade58: [0.478, 0.447, 0.404, 1.0],
        shade59: [0.396, 0.4, 0.38, 1.0],
        shade60: [0.231, 0.247, 0.212, 1.0],
        shade61: [0.255, 0.306, 0.412, 1.0],
        shade62: [0.259, 0.325, 0.42, 1.0],
        shade63: [0.302, 0.353, 0.447, 1.0],
        shade64: [0.416, 0.475, 0.565, 1.0],
        shade65: [0.353, 0.408, 0.51, 1.0],
        shade66: [0.616, 0.655, 0.698, 1.0],
        shade67: [0.11, 0.122, 0.075, 1.0],
    };

    const triangles = [
        // Background
        [-1, -1, -1, 1, 1, 1, colors.background],
        [-1, -1, 1, 1, 1, -1, colors.background],

        // Shapes
        [-0.812, -0.845, -1.0, -0.7, -1.0, -0.85, colors.shade1],
        [-0.812, -0.845, -1.0, -0.7, -0.797, -0.525, colors.shade2],
        [-1.0, -0.58, -1.0, -0.7, -0.797, -0.525, colors.shade3],
        [-1.0, -0.58, -0.872, -0.475, -0.797, -0.525, colors.shade4],
        [-1.0, -0.58, -0.872, -0.475, -0.922, -0.44, colors.shade5],
        [-1.0, -0.58, -1.0, -0.45, -0.922, -0.44, colors.shade6],
        [-1.0, -0.335, -1.0, -0.45, -0.922, -0.44, colors.shade7],
        [-1.0, -0.335, -0.832, -0.4, -0.922, -0.44, colors.shade8],
        [-0.872, -0.475, -0.832, -0.4, -0.922, -0.44, colors.shade9],
        [-0.872, -0.475, -0.832, -0.4, -0.797, -0.525, colors.shade10],
        [-0.702, -0.585, -0.812, -0.845, -0.797, -0.525, colors.shade11],
        [-0.702, -0.585, -0.812, -0.845, -0.537, -0.595, colors.shade12],
        [-0.702, -0.585, -0.652, -0.49, -0.537, -0.595, colors.shade13],
        [-0.702, -0.585, -0.652, -0.49, -0.797, -0.525, colors.shade14],
        [-0.007, -0.845, 0.118, -0.685, -0.042, -0.635, colors.shade26],
        [-0.007, -0.845, 0.118, -0.685, 0.213, -0.845, colors.shade27],
        [0.358, -0.68, 0.118, -0.685, 0.213, -0.845, colors.shade28],
        [0.358, -0.68, 0.438, -0.845, 0.213, -0.845, colors.shade29],
        [0.358, -0.68, 0.438, -0.845, 0.498, -0.725, colors.shade30],
        [0.618, -0.845, 0.438, -0.845, 0.498, -0.725, colors.shade31],
        [0.618, -0.845, 0.528, -0.48, 0.498, -0.725, colors.shade32],
        [0.358, -0.68, 0.528, -0.48, 0.498, -0.725, colors.shade33],
        [0.728, -0.735, 0.578, -0.685, 0.618, -0.845, colors.shade32],
        [0.728, -0.735, 0.578, -0.685, 0.728, -0.64, colors.shade34],
        [0.778, -0.845, 0.728, -0.735, 0.618, -0.845, colors.shade35],
        [0.778, -0.845, 0.728, -0.735, 0.873, -0.715, colors.shade36],
        [0.778, -0.845, 0.908, -0.845, 0.873, -0.715, colors.shade37],
        [1.0, -0.705, 0.908, -0.845, 0.873, -0.715, colors.shade38],
        [1.0, -0.705, 0.908, -0.845, 1.0, -0.845, colors.shade39],
        [-0.797, -0.32, -1.0, -0.335, -0.837, -0.4, colors.shade40],
        [-0.797, -0.32, -1.0, -0.335, -1.0, -0.2, colors.shade41],
        [-0.797, -0.32, -0.797, -0.105, -1.0, -0.2, colors.shade42],
        [-1.0, -0.08, -0.797, -0.105, -1.0, -0.2, colors.shade43],
        [-1.0, -0.08, -0.797, -0.105, -0.827, 0.085, colors.shade44],
        [-1.0, -0.08, -1.0, 0.08, -0.827, 0.085, colors.shade43],
        [-0.882, 0.28, -1.0, 0.08, -0.827, 0.085, colors.shade45],
        [-0.882, 0.28, -1.0, 0.08, -1.0, 0.28, colors.shade46],
        [-0.882, 0.28, -0.777, 0.28, -0.827, 0.085, colors.shade43],
        [-1.0, 0.28, -0.912, 0.33, -0.777, 0.28, colors.shade42],
        [-0.677, 0.215, -0.647, 0.275, -0.777, 0.28, colors.shade47],
        [-0.677, 0.215, -0.722, 0.14, -0.777, 0.28, colors.shade44],
        [-0.827, 0.085, -0.722, 0.14, -0.777, 0.28, colors.shade45],
        [-0.827, 0.085, -0.722, 0.14, -0.797, -0.105, colors.shade48],
        [-0.632, -0.08, -0.722, 0.14, -0.797, -0.105, colors.shade49],
        [-0.632, -0.08, -0.722, 0.14, -0.562, 0.125, colors.shade50],
        [-0.677, 0.215, -0.722, 0.14, -0.562, 0.125, colors.shade51],
        [-0.677, 0.215, -0.647, 0.275, -0.562, 0.125, colors.shade52],
        [-0.632, -0.08, -0.447, -0.08, -0.562, 0.125, colors.shade53],
        [-0.632, -0.08, -0.447, -0.08, -0.577, -0.2, colors.shade40],
        [-0.632, -0.08, -0.662, -0.23, -0.577, -0.2, colors.shade54],
        [-0.632, -0.08, -0.662, -0.23, -0.797, -0.105, colors.shade55],
        [-0.717, -0.275, -0.577, -0.31, -0.797, -0.103, colors.shade50],
        [-0.797, -0.105, -0.837, -0.4, -0.717, -0.275, colors.shade56],
        [-0.652, -0.49, -0.837, -0.4, -0.717, -0.275, colors.shade57],
        [-0.652, -0.49, -0.577, -0.31, -0.717, -0.275, colors.shade51],
        [-0.577, -0.2, -0.662, -0.23, -0.577, -0.31, colors.shade58],
        [-0.497, -0.445, -0.537, -0.595, -0.652, -0.49, colors.shade59],
        [-0.497, -0.445, -0.577, -0.31, -0.652, -0.49, colors.shade55],
        [-0.562, 0.125, -0.447, -0.08, -0.277, 0.045, colors.shade52],
        [-0.242, -0.16, -0.447, -0.08, -0.277, 0.045, colors.shade51],
        [-0.242, -0.16, -0.447, -0.08, -0.367, -0.24, colors.shade55],
        [-0.577, -0.2, -0.447, -0.08, -0.367, -0.24, colors.shade45],
        [-0.577, -0.2, -0.577, -0.31, -0.367, -0.24, colors.shade46],
        [-0.497, -0.445, -0.577, -0.31, -0.367, -0.24, colors.shade45],
        [-0.497, -0.445, -0.272, -0.43, -0.367, -0.24, colors.shade49],
        [-0.497, -0.445, -0.272, -0.43, -0.537, -0.595, colors.shade51],
        [-0.402, -0.595, -0.537, -0.595, -0.422, -0.52, colors.shade60],
        [-0.402, -0.595, -0.272, -0.43, -0.422, -0.52, colors.shade55],
        [-0.402, -0.595, -0.272, -0.43, -0.422, -0.52, colors.shade55],
        [-0.277, 0.045, -0.242, -0.16, -0.197, -0.005, colors.shade50],
        [-0.037, -0.18, -0.242, -0.16, -0.197, -0.005, colors.shade45],
        [-0.037, -0.18, -0.102, 0.04, -0.197, -0.005, colors.shade46],
        [-0.037, -0.18, -0.102, 0.04, 0.082, -0.08, colors.shade61],
        [0.018, 0.06, -0.102, 0.04, 0.082, -0.08, colors.shade62],
        [0.018, 0.06, 0.152, -0.025, 0.082, -0.08, colors.shade63],
        [0.018, 0.06, 0.152, -0.025, 0.158, 0.085, colors.shade61],
        [0.298, -0.025, 0.152, -0.025, 0.158, 0.085, colors.shade62],
        [0.298, -0.025, 0.303, 0.12, 0.158, 0.085, colors.shade64],
        [0.207, 0.155, 0.303, 0.12, 0.158, 0.085, colors.shade65],
        [0.298, -0.025, 0.303, 0.12, 0.363, 0.05, colors.shade66],
        [0.382, 0.155, 0.303, 0.12, 0.363, 0.05, colors.shade40],
        [0.382, 0.155, 0.303, 0.12, 0.363, 0.05, colors.shade40],
        [0.382, 0.155, 0.462, 0.1, 0.363, 0.05, colors.shade41],
        [0.457, 0.03, 0.462, 0.1, 0.363, 0.05, colors.shade42],
        [0.457, 0.03, 0.372, -0.04, 0.363, 0.05, colors.shade41],
        [0.298, -0.025, 0.372, -0.04, 0.363, 0.05, colors.shade43],
        [0.457, 0.03, 0.462, 0.1, 0.577, 0.025, colors.shade44],
        [0.592, 0.105, 0.462, 0.1, 0.577, 0.025, colors.shade45],
        [0.592, 0.105, 0.637, 0.035, 0.577, 0.025, colors.shade46],
        [0.592, 0.105, 0.637, 0.035, 0.697, 0.09, colors.shade48],
        [0.592, 0.105, 0.637, 0.035, 0.697, 0.09, colors.shade48],
        [0.687, -0.025, 0.637, 0.035, 0.697, 0.09, colors.shade47],
        [0.687, -0.025, 0.752, 0.02, 0.697, 0.09, colors.shade49],
        [0.687, -0.025, 0.752, 0.02, 0.752, -0.14, colors.shade63],
        [0.82, -0.025, 0.752, 0.02, 0.752, -0.14, colors.shade55],
        [0.82, -0.025, 0.847, -0.14, 0.752, -0.14, colors.shade51],
        [0.82, -0.025, 0.847, -0.14, 0.957, -0.13, colors.shade57],
        [0.877, -0.235, 0.847, -0.14, 0.752, -0.14, colors.shade59],
        [0.877, -0.235, 0.847, -0.14, 1.0, -0.205, colors.shade33],
        [1.0, -0.125, 0.847, -0.14, 1.0, -0.205, colors.shade43],
        [-0.182, -0.5, -0.242, -0.16, -0.037, -0.18, colors.shade47],
        [-0.367, -0.24, -0.242, -0.16, -0.277, -0.425, colors.shade46],
        [-0.182, -0.5, -0.242, -0.16, -0.277, -0.425, colors.shade43],
        [-0.182, -0.5, -0.404, -0.6, -0.277, -0.425, colors.shade42],
        [-0.182, -0.5, -0.404, -0.6, -0.287, -0.645, colors.shade33],
        [-0.182, -0.5, -0.142, -0.6, -0.287, -0.645, colors.shade29],
        [-0.182, -0.5, -0.142, -0.61, 0.117, -0.685, colors.shade28],
        [0.097, -0.175, 0.077, -0.075, -0.042, -0.18, colors.shade63],
        [0.097, -0.175, 0.117, -0.3, -0.042, -0.18, colors.shade60],
        [-0.114, -0.35, 0.117, -0.3, -0.042, -0.18, colors.shade59],
        [-0.114, -0.35, 0.117, -0.3, 0.092, -0.395, colors.shade52],
        [-0.114, -0.35, -0.002, -0.445, 0.092, -0.395, colors.shade51],
        [-0.114, -0.35, -0.002, -0.445, -0.182, -0.5, colors.shade58],
        [-0.027, -0.595, -0.002, -0.445, -0.182, -0.5, colors.shade55],
        [-0.027, -0.595, -0.002, -0.445, 0.117, -0.685, colors.shade54],
        [0.137, -0.52, -0.002, -0.445, 0.117, -0.685, colors.shade52],
        [0.137, -0.52, -0.002, -0.445, 0.092, -0.395, colors.shade59],
        [0.137, -0.52, 0.242, -0.46, 0.092, -0.395, colors.shade55],
        [0.137, -0.52, 0.242, -0.46, 0.292, -0.58, colors.shade54],
        [0.137, -0.52, 0.117, -0.685, 0.291, -0.58, colors.shade37],
        [0.357, -0.685, 0.117, -0.685, 0.291, -0.58, colors.shade35],
        [0.357, -0.685, 0.417, -0.465, 0.291, -0.58, colors.shade43],
        [0.357, -0.685, 0.417, -0.465, 0.527, -0.48, colors.shade45],
        [0.522, -0.315, 0.417, -0.465, 0.527, -0.48, colors.shade48],
        [0.522, -0.315, 0.677, -0.435, 0.527, -0.48, colors.shade51],
        [0.637, -0.595, 0.677, -0.435, 0.527, -0.48, colors.shade30],
        [0.637, -0.595, 0.577, -0.685, 0.527, -0.48, colors.shade67],
        [0.637, -0.595, 0.577, -0.684, 0.724, -0.64, colors.shade33],
        [0.637, -0.595, 0.742, -0.555, 0.724, -0.64, colors.shade45],
        [0.637, -0.595, 0.742, -0.555, 0.677, -0.435, colors.shade44],
        [0.837, -0.53, 0.742, -0.555, 0.677, -0.435, colors.shade45],
        [0.837, -0.53, 0.742, -0.555, 0.724, -0.64, colors.shade59],
        [0.837, -0.53, 0.897, -0.575, 0.724, -0.64, colors.shade29],
        [0.872, -0.72, 0.897, -0.575, 0.724, -0.64, colors.shade30],
        [0.872, -0.72, 0.727, -0.735, 0.724, -0.64, colors.shade33],
        [0.872, -0.72, 0.897, -0.575, 1.0, -0.625, colors.shade35],
        [0.872, -0.72, 1.0, -0.71, 1.0, -0.625, colors.shade34],
        [1.0, -0.51, 0.897, -0.575, 1.0, -0.625, colors.shade36],
        [1.0, -0.51, 0.897, -0.575, 0.957, -0.4, colors.shade44],
        [0.837, -0.53, 0.897, -0.575, 0.957, -0.4, colors.shade45],
        [0.837, -0.53, 0.847, -0.39, 0.957, -0.4, colors.shade48],
        [0.837, -0.53, 0.847, -0.39, 0.677, -0.435, colors.shade64],
        [0.662, -0.29, 0.847, -0.39, 0.677, -0.435, colors.shade43],
        [0.662, -0.29, 0.847, -0.39, 0.677, -0.435, colors.shade65],
        [0.662, -0.29, 0.522, -0.315, 0.677, -0.435, colors.shade59],
        [0.662, -0.29, 0.522, -0.315, 0.572, -0.195, colors.shade61],
        [0.662, -0.29, 0.752, -0.14, 0.572, -0.195, colors.shade65],
        [0.662, -0.29, 0.752, -0.14, 0.877, -0.235, colors.shade64],
        [0.662, -0.29, 0.842, -0.39, 0.877, -0.235, colors.shade63],
        [0.952, -0.4, 0.842, -0.39, 0.877, -0.235, colors.shade66],
        [0.952, -0.4, 1.0, -0.375, 0.877, -0.235, colors.shade55],
        [0.952, -0.4, 1.0, -0.375, 1.0, -0.51, colors.shade58],
        [1.0, -0.2, 1.0, -0.375, 0.877, -0.235, colors.shade61],
        // BASE OF CLIFF
        [-1.0, -0.845, -1.0, -1.0, 1.0, -0.845, colors.shade2],
        [1.0, -1.0, -1.0, -1.0, 1.0, -0.845, colors.shade2]
    ];

    
    for (const tri of triangles) {
        for (let i = 0; i < 6; i++) {
            verts[i] = tri[i];
        }
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
        gl.uniform4f(u_FragColor, ...tri[6]); // Set color
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
}